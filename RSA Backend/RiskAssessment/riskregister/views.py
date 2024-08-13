from django.http import JsonResponse

from rest_framework import status

from rest_framework.decorators import api_view

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework.parsers import JSONParser



from .models import RiskRegister

from .serializers import RiskRegisterSerializer

from .helpers import Velocity, Likelihood, Impact, risk_scoring


# from rest_framework.exceptions import HTTP


@api_view(['GET','POST'])

def risk_register(request):

    if request.method == 'GET':

        risk = RiskRegister.objects.all()

        serializer = RiskRegisterSerializer(risk,many=True)

        return JsonResponse({'risks':serializer.data})

    

    if  request.method == 'POST':

        serializer = RiskRegisterSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save()  
            

            return JsonResponse(serializer.data,safe=False)#(serializer.data, status=status.HTTP_201_CREATED)

        else:

            return JsonResponse("THIS IS AN ERROR CONDITION", safe=False)#("Invalid data", status=status.HTTP_400_BAD_REQUEST)




class RiskRegisterView(APIView):

    parser_classes = [JSONParser]

    def post(self,request,*args,**kwargs):

        request_json = request.data

        calc_rating = {

            "rating": risk_scoring(

                Impact[request_json["impact"]].value,

                Likelihood[request_json["likelihood"]].value,

                Velocity[request_json["velocity"]].value
                )

            }

        rating = {"rating":calc_rating["rating"]['rating']}

        processed_request = {**request_json, **rating}
        

        risk_rate = RiskRegister(**processed_request)
        risk_rate.save()

        return JsonResponse(data=processed_request, status=200)




@api_view(['GET','PUT','DELETE'])

def risk_details(request,id):


    try:

        risk = RiskRegister.objects.get(pk=id)

    except:

        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'GET':

        serializer = RiskRegisterSerializer(risk)

        return Response(serializer.data, status=status.HTTP_200_OK)


    elif request.method == 'DELETE':
        risk.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


    elif request.method == 'PUT':

        serializer = RiskRegisterSerializer(risk, data=request.data)

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



