import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "../components/AppButton";
import Header from "../components/Header";

function HairCutRecommenderScreen(props) {
  const Oval = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Oval/Oval.jpg"),
      title: "Oval",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Oval/Oval1.jpg"),
      title: "Oval",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Oval/Oval2.jpg"),
      title: "Oval",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Oval/Oval3.jpg"),
      title: "Oval",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Oval/Oval4.jpg"),
      title: "Oval",
    },
  ];
  const Diamond = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Diamond/Diamond.jpg"),
      title: "Diamond",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Diamond/Diamond1.jpg"),
      title: "Diamond",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Diamond/Diamond2.jpg"),
      title: "Diamond",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Diamond/Diamond3.jpg"),
      title: "Diamond",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Diamond/Diamond4.jpg"),
      title: "Diamond",
    },
    {
      id: 6,
      source: require("../assets/Hairstyles/Diamond/Diamond5.jpg"),
      title: "Diamond",
    },
  ];

  const Rectangle = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Rectangle/Rectangle.jpg"),
      title: "Rectangle",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Rectangle/Rectangle1.jpg"),
      title: "Rectangle",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Rectangle/Rectangle2.jpg"),
      title: "Rectangle",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Rectangle/Rectangle3.jpg"),
      title: "Rectangle",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Rectangle/Rectangle4.jpg"),
      title: "Rectangle",
    },
    {
      id: 6,
      source: require("../assets/Hairstyles/Rectangle/Rectangle5.jpg"),
      title: "Rectangle",
    },
  ];

  const Round = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Round/Round.jpg"),
      title: "Round",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Round/Round1.jpg"),
      title: "Round",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Round/Round2.jpg"),
      title: "Round",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Round/Round3.jpg"),
      title: "Round",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Round/Round4.jpg"),
      title: "Round",
    },
    {
      id: 6,
      source: require("../assets/Hairstyles/Round/Round5.jpg"),
      title: "Round",
    },
  ];

  const Square = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Square/Square.jpg"),
      title: "Square",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Square/Square1.jpg"),
      title: "Square",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Square/Square2.jpg"),
      title: "Square",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Square/Square3.jpg"),
      title: "Square",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Square/Square4.jpg"),
      title: "Square",
    },
    {
      id: 6,
      source: require("../assets/Hairstyles/Square/Square5.jpg"),
      title: "Square",
    },
  ];
  const Triangle = [
    {
      id: 1,
      source: require("../assets/Hairstyles/Triangle/Triangular.jpg"),
      title: "Triangle",
    },
    {
      id: 2,
      source: require("../assets/Hairstyles/Triangle/Triangular1.jpg"),
      title: "Triangle",
    },
    {
      id: 3,
      source: require("../assets/Hairstyles/Triangle/Triangular2.jpg"),
      title: "Triangle",
    },
    {
      id: 4,
      source: require("../assets/Hairstyles/Triangle/Triangular3.jpg"),
      title: "Triangle",
    },
    {
      id: 5,
      source: require("../assets/Hairstyles/Triangle/Triangular4.jpg"),
      title: "Triangle",
    },
    {
      id: 6,
      source: require("../assets/Hairstyles/Triangle/Triangular5.jpg"),
      title: "Triangle",
    },
  ];

  const [shape, setShape] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [selectImageInfo, setSelectImageInfo] = useState("");
  const [urlErr, setUrlErr] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (url) {
      fetch("https://sar-server.herokuapp.com/findfaceshape", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      })
        .then((res) => {
          const contentType = res.headers.get("content-type");

          if (contentType && contentType.indexOf("application/json") !== -1) {
            return res.json().then((data) => {
              if (data.error) {
                alert(data.error);
                return;
              } else {
                console.log(data);
                setShape(data.result);
                return;
              }
            });
          } else {
            alert("image invalid");
            setSelectImageInfo("");
            setStatus("");
            setImage("");
            console.log("invalid image");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [url]);

  const findFaceShape = () => {
    if (!image) {
      setUrlErr("Please Upload Image");
    } else {
      setStatus("Calculating... Please Wait");
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "scissorsAndRazors");
      data.append("cloud_name", "najeeb777");
      fetch("https://api.cloudinary.com/v1_1/najeeb777/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const pickImage = async () => {
    setSelectImageInfo("");
    setUrlErr("");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(`data:image/jpg;base64,${result.base64}`);
      setSelectImageInfo("Image has been picked");
    }
  };

  const renderList = () => {
    if (!shape) {
      return [
        <View style={{ padding: 40 }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                padding: 10,
                top: 10,
                marginBottom: 40,
              }}
            >
              Find Hairstyles
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title="Pick Image" color="primary" change={pickImage} />
          </View>
          <View>
            <Text style={{ color: "red", marginTop: 40 }}>{urlErr}</Text>
          </View>
          <View>
            <Text style={{ color: "red", marginTop: 40 }}>
              {selectImageInfo}
            </Text>
          </View>
          <View
            style={{
              width: "70%",
              alignItems: "center",
              left: 28,
              // marginTop: 100,
            }}
          >
            <AppButton
              title="Find Now"
              color="primary"
              change={() => {
                findFaceShape();
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 30,
              fontWeight: "bold",
              color: "red",
            }}
          >
            {status}
          </Text>
        </View>,
      ];
    } else if (shape === "Rectangle") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Rectangle.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else if (shape === "Round") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Round.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else if (shape === "Oval") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Oval.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else if (shape === "Diamond") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Diamond.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else if (shape === "Square") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Square.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else if (shape === "Triangle") {
      return [
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Your Face shape is:
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "70%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                padding: 10,
              }}
            >
              Recommended Hairstyles for you:
            </Text>
          </View>
          {Triangle.map((item) => {
            return (
              <View style={styles.imageContainer} key={item.key}>
                <Image style={styles.image} source={item.source} />
              </View>
            );
          })}
        </View>,
      ];
    } else {
      return (
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
              }}
            >
              Error
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {shape}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                height: 35,
                marginVertical: 10,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setShape("");
                  setStatus("");
                  setSelectImageInfo("");
                }}
              >
                Pick another Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <ImageBackground
      //blurRadius={5}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View width={"100%"}>
        <Header title={"Haircut Recommender"} />
      </View>
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        <View>{renderList()}</View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    //padding: 20,
    width: "95%",
    //marginVertical: 5,
  },
  imageContainer: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default HairCutRecommenderScreen;
