from pydantic import BaseModel

class Sighting(BaseModel):
    evt_datetime_utc: str
    commonname: str 
    observationcount: int

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "evt_datetime_utc": "2013-12-16T16:38:00+00:00",
                "commonname": "Gray Whale",
                "observationcount": 2,
            }
        }