from enum import Enum

class Impact(Enum):
    no_impact: int = 1
    little: int = 2
    significant: int = 3
    severe: int = 4
    catastrophic: int = 5


class Likelihood(Enum):
    rare: int = 1
    unlikely: int = 2
    possible: int = 3
    likely: int = 4
    almost_certain: int = 5


class Velocity(Enum):
    very_slow: float = 0.3
    slow: float = 0.6
    moderate: float = 0.9
    rapid: float = 1.2
    very_rapid: float = 1.5

class ScoreOutOfRange(Exception):
    pass

def risk_scoring(impact: Impact, likelihood: Likelihood, velocity: Velocity):
    risk_score = impact + likelihood + velocity
    print(risk_score)
    assert risk_score >= 1
    if 1 <= risk_score < 3:
        return {"risk_score": risk_score, "rating": "very low"}
    elif 3 <= risk_score < 5:
        return {"risk_score": risk_score, "rating": "low"}
    elif 5 <= risk_score < 9:
        return {"risk_score": risk_score, "rating": "medium"}
    elif 9 <= risk_score < 15:
        return {"risk_score": risk_score, "rating": "high"}
    elif 15 <= risk_score <= 20:
        return {"risk_score": risk_score, "rating": "critical"}
    else:
        raise ScoreOutOfRange("Your score is out of range")
