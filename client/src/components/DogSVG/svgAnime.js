anime({
    targets: "#demo-svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: 5000,
    direction: "alternate",
    loop: true
  })

  console.log("Is This Working?")