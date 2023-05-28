from fastapi import APIRouter, Request
from typing import List

from models import Sighting

router = APIRouter()

@router.get("/", response_description="List all sightings", response_model=List[Sighting])
def list_sightings(request: Request):
    sightings = list(request.app.database["whale_sightings"].find({}))

    return sightings