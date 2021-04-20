define(
  "sampleapp/appui/datasources/simplefeed",
  [
    "antie/class"
  ],
  function(Class) {
    return Class.extend({
      // You will probably want to do something more useful then returning static data
      loadData : function(callbacks) {
        callbacks.onSuccess(
          [
            {
              "id":"1",
              "title":"Trigger Point",
              "img" : "https://m.media-amazon.com/images/M/MV5BY2NhMjMxNzMtMDIwMC00NzQwLWI4N2ItMTVkNzNhOGIxMDJmXkEyXkFqcGdeQXVyMTMwMjY1MTY2._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            },
            {
              "id":"2",
              "title":"We Broke Up",
              "img" : "https://m.media-amazon.com/images/M/MV5BN2ZjNmVkN2YtODZlMi00MmU1LWFmNTUtMTljMDU0YzY0YThlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            },
            {
              "id":"3",
              "title":"High Ground",
              "img" : "https://m.media-amazon.com/images/M/MV5BZDI4NmU2ZjMtM2Y5ZC00NjM1LTg1ZGYtMTA3YWVhNDg3NDllXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            },
            {
              "id":"4",
              "title":"The Virtuoso",
              "img" : "https://m.media-amazon.com/images/M/MV5BNjQ3NjkyNGMtMmVkZS00ZGQ0LTgyMjgtNmY1YTAzN2NlM2EzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            },
            {
              "id":"5",
              "title":"Port Authority",
              "img" : "https://m.media-amazon.com/images/M/MV5BZGJmYzBhMjctMDNjYi00YmJmLWFhOWMtYzQxMTBjOWNhOTQ0XkEyXkFqcGdeQXVyMzE4MjM0OQ@@._V1_UY268_CR11,0,182,268_AL__QL50.jpg"
            },
            {
              "id":"6",
              "title":"Thunder Force",
              "img" : "https://m.media-amazon.com/images/M/MV5BMWZkM2I2NjEtNWM0Mi00MTgwLWJlYTAtYmNkZWYzNmQ1ZTBiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            }
          ]
        );
      }
    });
  });
