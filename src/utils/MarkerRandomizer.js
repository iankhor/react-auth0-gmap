export function getRandomCoordinate() {
    const index = Math.floor(Math.random() * (randomNumberConfig.end - randomNumberConfig.start + 1) + randomNumberConfig.start)
    const lat = coordinatesConfig.mainLat - 
                Math.floor(Math.random() * (coordinatesConfig.maxLat- coordinatesConfig.minLat + 1) + coordinatesConfig.minLat) / 1000000
    const lng = coordinatesConfig.mainLng + 
                Math.floor(Math.random() * (coordinatesConfig.maxLng- coordinatesConfig.minLng + 1) + coordinatesConfig.minLng) / 1000000
    
    return { index, lat, lng }
}

export const coordinatesConfig = {
    mainLat: -37.81,
    minLat: 2357,
    maxLat: 3456,
    mainLng: 144.95,
    minLng: 4377,
    maxLng: 7009
}

export const randomNumberConfig = {
    start: 1,
    end: 10
}

export const initCoordinates = [
    {lat: -37.812357, lng: 144.954377, key: "1"},
    {lat: -37.812357, lng: 144.954377, key: "2"},
    {lat: -37.812310, lng: 144.954287, key: "3"},
    {lat: -37.812357, lng: 144.954377, key: "4"},
    {lat: -37.812347, lng: 144.954377, key: "5"},
    {lat: -37.812357, lng: 144.957009, key: "6"},
    {lat: -37.813456, lng: 144.957009, key: "7"},
    {lat: -37.813456, lng: 144.957009, key: "8"},
    {lat: -37.813456, lng: 144.957009, key: "9"},
    {lat: -37.813456, lng: 144.957009, key: "10"}
]

