var $ = require("jquery");
var MainView = require("../../src/js/main");

describe("My main View", function() {
  $("body").append('<div id="root"/>');

  it("should render with default main html", function() {
    let childPage = '<div class="child"></div>';
    new MainView(childPage);

    expect($(".child").html()).toEqual("Text passed from main view");
  });

  it("should give addition of 2 numbers", function() {
    var mainView = new MainView();
    expect(mainView.add2Numbers(5, 5)).toEqual(10);
  });

  it("should display the result in a div", function() {
    let childPage = '<div class="child"></div><h3 class="result"></h3></div>';
    var mainView = new MainView(childPage);
    mainView.showResult();
    expect($(".result").html()).toEqual("Your program result is : 10");
  });
});
