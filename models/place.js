class Place {
  constructor(title, imgUri, address, location) {
    this.title = title;
    this.address = address;
    this.imgUri = imgUri;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
