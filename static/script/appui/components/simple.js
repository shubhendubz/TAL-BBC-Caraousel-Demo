define(
  "sampleapp/appui/components/simple",
  [
    "antie/widgets/component",
    "antie/widgets/button",
    "antie/widgets/label",
    "antie/widgets/verticallist",
    "antie/widgets/carousel",
    "antie/datasource",
    "sampleapp/appui/formatters/simpleformatter",
    "sampleapp/appui/datasources/simplefeed"
  ],
  function (Component, Button, Label, VerticalList, Carousel, DataSource, SimpleFormatter, SimpleFeed) {

    // All components extend Component
    return Component.extend({
      init: function init () {
        var self, helloWorldLabel, welcomeLabel, carouselButtonLabel, verticalListMenu;

        self = this;

        // It is important to call the constructor of the superclass
        init.base.call(this, "simplecomponent");

        // Add the labels to the component
        helloWorldLabel = new Label("helloWorldLabel", "Hello Viewers");
        this.appendChildWidget(helloWorldLabel);

        welcomeLabel = new Label("welcomeLabel", "Let's see the latest movies released...");
        this.appendChildWidget(welcomeLabel);

        var newCarouselButton = this._createCarouselButton();

        

        // Create a vertical list and append the buttons to navigate within the list
        verticalListMenu = new VerticalList("mainMenuList");
        verticalListMenu.appendChildWidget(newCarouselButton);
        this.appendChildWidget(verticalListMenu);

        // calls Application.ready() the first time the component is shown
        // the callback removes itself once it's fired to avoid multiple calls.
        this.addEventListener("aftershow", function appReady(evt) {
          self.getCurrentApplication().ready();
          self.removeEventListener('aftershow', appReady);
        });
      },

      _createCarouselButton: function () {
        var self = this;
        function carouselExampleSelected() {
          self.getCurrentApplication().pushComponent(
            "maincontainer",
            "sampleapp/appui/components/carouselcomponent",
            self._getCarouselConfig()
          );
        }

        var button = new Button('carouselButton');
        button.appendChildWidget(new Label("Latest Movies"));
        button.addEventListener('select', carouselExampleSelected);
        return button;
      },

      data: async function (){
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e2a1e97f");
        var data = await response.json();
        },

      _getCarouselConfig: function () {
        return {
          description: "LEFT and RIGHT to navigate movies, SELECT/Enter to go back",
          dataSource: new DataSource(null, new SimpleFeed(), 'loadData'),
          formatter: new SimpleFormatter(),
          // orientation: Carousel.orientations.VERTICAL,
          orientation: Carousel.orientations.HORIZONTAL,
          carouselId: 'verticalCullingCarousel',
          animOptions: {
            skipAnim: false
          },
          alignment: {
            normalisedAlignPoint: 0.5,
            normalisedWidgetAlignPoint: 0.5
          },
          initialItem: 0,
          type: "CULLING",
          lengths: 264
        };
      }
    });
  }
);
