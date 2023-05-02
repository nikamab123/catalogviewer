import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../styles/Dashboard";
import { useRef, useState, useEffect } from "react";

const smallCard = [
  {
    id: 1,
    img: require("../Assets/coconut.jpg"),
    title: "Coconut Trees",
    text: "The coconut tree provides food, fuel, cosmetics, folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it, form a regular part of the diets of many people in the tropics and subtropics",
  },
  {
    id: 2,
    img: require("../Assets/boat.jpg"),
    title: "Boat",
    text: "A riverboat is a watercraft designed for inland navigation on lakes, rivers, and artificial waterways. They are generally equipped and outfitted as work ",
  },
  {
    id: 3,
    img: require("../Assets/hrishikesh.jpg"),
    title: "Hrishikesh",
    text: "Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge.[1][2] There are numerous temples and ashrams built along the banks of the river.It is known as the Gateway to the Garhwal Himalayas and Yoga Capital of the World . The city has hosted the annual",
  },
  {
    id: 4,
    img: require("../Assets/coconut.jpg"),
    title: "The COCONUT",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis et lore",
  },
  {
    id: 5,
    img: require("../Assets/mountain.jpg"),
    title: "Mountain",
    text: "Mountains are beautifule and joyous , Himalayan maounatins are famous in India.",
  },
  {
    id: 6,
    img: require("../Assets/owl.png"),
    title: "OWL",
    text: "Yes, an owl is a type of bird. It belongs to the order Strigiformes and there are around 200 different species of owls that are found all around the world, except for Antarctica. Owls are known for their distinctive round faces, large eyes, and nocturnal behavior. They are also known for their exceptional hearing and silent flight. Owls are considered to be important predators in many ecosystems, and they play an important role in controlling populations of rodents and other small animals.",
  },
  {
    id: 7,
    img: require("../Assets/coconut.jpg"),
    title: "Coconut Tree",
    text: " It is widely grown in tropical regions around the world. It is characterized by its tall, slender trunk that can grow up to 30 meters in height, and its large, feathery fronds that can reach up to 5 meters in length. The coconut tree produces a variety of useful products, including coconuts (which are used for food and oil), coconut water (which is a popular beverage), and coconut husks (which are used for fiber and fuel). The coconut tree is also important in many cultures for its symbolic and spiritual significance.",
  },
  {
  id: 8,
  img: require("../Assets/owl.png"),
  title: "OWL",
  text: "Yes, an owl is a type of bird. It belongs to the order Strigiformes and there are around 200 different species of owls that are found all around the world, except for Antarctica. Owls are known for their distinctive round faces, large eyes, and nocturnal behavior. They are also known for their exceptional hearing and silent flight. Owls are considered to be important predators in many ecosystems, and they play an important role in controlling populations of rodents and other small animals.",
},
{
  id: 9,
  img: require("../Assets/coconut.jpg"),
  title: "Coconut Tree",
  text: " It is widely grown in tropical regions around the world. It is characterized by its tall, slender trunk that can grow up to 30 meters in height, and its large, feathery fronds that can reach up to 5 meters in length. The coconut tree produces a variety of useful products, including coconuts (which are used for food and oil), coconut water (which is a popular beverage), and coconut husks (which are used for fiber and fuel). The coconut tree is also important in many cultures for its symbolic and spiritual significance.",
},
];

export default function Dashboard() {
  const cardContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const [selected, setSelected] = useState(
    smallCard.find((item) => item.id === 1)
  );

  const handleCardSelection = (item) => {
    setSelected(item);
  };

  const scrollLeft = () => {
    const cardContainer = cardContainerRef.current;
    cardContainer.scrollLeft -= 100; // adjust the value as per your requirement
  };

  const scrollRight = () => {
    const cardContainer = cardContainerRef.current;
    cardContainer.scrollLeft += 100; // adjust the value as per your requirement
  };

  function nextCard() {
    var currentIndex = parseInt(document.getElementById("card-index").innerHTML);
    var lastIndex = parseInt(document.getElementById("last-index").innerHTML);
    var smallCardLastIndex = parseInt(document.getElementById("smallcard-last-index").innerHTML);
  
    if (currentIndex == lastIndex) {
      currentIndex = 1;
      document.getElementById("card-index").innerHTML = currentIndex;
      document.getElementById("card-image").src = "card" + currentIndex + ".png";
    } else if (currentIndex == smallCardLastIndex) {
      currentIndex = 1;
      document.getElementById("card-index").innerHTML = currentIndex;
      document.getElementById("card-image").src = "smallcard" + currentIndex + ".png";
    } else {
      currentIndex++;
      document.getElementById("card-index").innerHTML = currentIndex;
      document.getElementById("card-image").src = "smallcard" + currentIndex + ".png";
    }
  }
  
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        scrollRight();
      }, 2000); // adjust the duration as per your requirement
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Box sx={styles.container}>
      {/* .........................top container starts............... */}
      {selected ? (
        <Box sx={styles.topContainer}>
          <Box sx={styles.imgContainer}>
            <img style={styles.img} src={selected.img} alt="img"></img>
          </Box>

          <Box sx={styles.desc}>
            <Typography sx={styles.title}> {selected.title}</Typography>
            <Box sx={styles.txtbox}>
              <Typography sx={styles.txt}>{selected.text}</Typography>
            </Box>
          </Box>
        </Box>
      ) : null}
      {/* .........................top container ends............... */}

      {/* .........................bottom container starts............... */}
      <Box sx={styles.bottomContainer}>
        <Box sx={styles.cards}>
          <Typography
            sx={{ marginX: "5px", "&:hover": { cursor: "pointer" } }}
            onClick={scrollLeft}
          >
            {"<"}
          </Typography>
          <Box sx={styles.scrollbar} ref={cardContainerRef}>
            {smallCard.map((item, index) => (
              <Box
                sx={styles.cardBox}
                onClick={() => handleCardSelection(item)}
                key={index}

              >
                <img
                  style={{ borderRadius: "20px", width: "100%", height: "95%" }}
                  src={item.img}
                  alt="img"
                ></img>
                <Typography sx={{ overflow: "hidden", height: "0px" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ overflow: "hidden", height: "0px" }}>
                  {item.text}
                </Typography>
              </Box>
            ))           

            }
          </Box>
          <Typography
            sx={{ marginX: "5px", "&:hover": { cursor: "pointer" } }}
            onClick={scrollRight}
          >
            {">"}
          </Typography>
        </Box>
        <Box sx={styles.bottomRight}>
          <Box>
            <img
              src={
                isPlaying
                  ? require("../Assets/pause.png")
                  : require("../Assets/play.png")
              }
              style={{ cursor: "pointer", marginLeft: "10px" }}
              alt="play/pause"
              onClick={handlePlayPauseClick}
            />
          
          </Box>
        </Box>
      </Box>
      {/* .........................bottom container ends............... */}
    </Box>
  );
}
