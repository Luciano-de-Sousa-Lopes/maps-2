export interface Mappable {
  content: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private customMap = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    }
  );

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.content,
    });

    marker.addListener("click", () => {
      infoWindow.open(this.customMap, marker);
    });
  }
}
