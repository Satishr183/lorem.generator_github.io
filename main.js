var Ipsum = {
    normal:    {
    sentences: [
      "We don't make mistakes, just happy little accidents. ",
      "There's nothing wrong with having a tree as a friend. ",
      "I like to talk to trees and animals. ",
      "Let's get crazy. ",
      "The secret to doing anything is believing that you can do it. ",
      "Wash the brush, just beat the devil out of it. ",
      "Just beat the devil out of it. ",
      "Believe that you can do it cause you can do it. ",
      "Lets build a happy little cloud. ",
      "Lets build some happy little trees. ",
      "Just relax and watch it happen. ",
      "Find freedom on this canvas. ",
      "We artists are a different breed of people. ",
      "That’s a crooked tree, we’ll send him to Washington. ",
      "Every day is a good day when you paint. ",
      "I think each of us, sometime in our life, has wanted to paint a picture. ",
      "Like I always say, ‘Everyone needs a friend. ",
      "Don’t forget to tell these special people in your life just how special they are to you. ",
      "You can move mountains, you can do anything. ",
      "Just let go — and fall like a little waterfall. ",
      "Be a gentle whisper. ",
      "However you think it should be, that’s exactly how it should be. ",
      "This is happy place; little squirrels live here and play. ",
      "Remember how free clouds are. ",
      "We don’t really know where this goes — and I’m not sure we really care. ",
      "Go out on a limb — that’s where the fruit is. ",
      "Isn’t it fantastic that you can change your mind and create all these happy things? ",
      "This is your world. ",
      "The only thing worse than yellow snow is green snow. ",
      "You need the dark in order to show the light. ",
      "Beauty is everywhere—you only have to look to see it. ",
      "Just go out and talk to a tree. ",
      "The secret to doing anything is believing that you can do it. ",
      "As my son Steve says, just 'smoosh' it in there.  ",
      "Clouds are very, very free. ",
      "Little raccoons and old possums 'n' stuff all live up in here. ",
      "Maybe in our world there lives a happy little tree over there. ",
      "You can put as many or as few as you want in your world. ",
      "We don’t laugh because we feel good, we feel good because we laugh. ",
      "I guess I'm a little weird. ",
      "All you need to paint is a few tools, a little instruction, and a vision in your mind. ",
      "Trees cover up a multitude of sins. ",
      "Whatever makes you happy, you put in your world. ",
      "If you look at the clouds long enough you’ll find exactly what you need. ",
      "It’s hard to see things when you’re too close. ",
      "It’s amazing what you can do with a little love in your heart. ",
      "Sometimes life has a funny sense of humor. ",
      "We don’t need to set the sky on fire, a little glow will do just fine. ",
      "Everybody has their own ideas, and that’s the way it should be. ",
      "Any time you learn, you gain. ",
      "We're gonna make some big decisions in our little world. ",
    ],
  },
};
var typeToggle = $(".words-sentences-container input:checked").val();
var languageToggle = $(".language-container input:checked").val();

var generatedIpsum = [];

$(".language-container input").on("change", function () {});

$(".generate-ipsum").on("click", function (e) {
  generatedIpsum = [];

  var quotes = Number($("#number-ipsum").val());
  var IpsumToggles = Ipsum[languageToggle][typeToggle];
  for (var i = 0; i < quotes; i++) {
    var randomNumber = Math.floor(Math.random() *IpsumToggles.length);
    var IpsumText = IpsumToggles[randomNumber];
    if (i === 0) {
      generatedIpsum.push(
        IpsumText.charAt(0).toUpperCase() + IpsumText.slice(1)
      );
    } else {
      generatedIpsum.push(IpsumText);
    }
  }

  $(".output-ipsum").html(generatedIpsum);
});
