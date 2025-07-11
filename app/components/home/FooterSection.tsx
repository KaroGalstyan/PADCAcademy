import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FooterSection = () => {
  return (
    <>
      <LinearGradient
        colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full pt-[39px] pl-[35px] pr-[28px] pb-[50px] mb-[1px]"
      >
        <View className="items-start mb-8">
          <Image
            source={require("../../../assets/images/padc-footer.png")}
            className="w-[138px] h-[49px] mb-4"
            resizeMode="contain"
          />
          <Text className="font-poppinsBold text-[30px] text-white text-start mb-2">
            Find your <Text className="text-[#4D7BC1]">Course</Text> & make sure goal.
          </Text>
          <Text className="font-poppins text-[15px] text-white text-center">
            Your dream Courses is waiting for you.
          </Text>
        </View>

        <View className="flex-row justify-between">
          <View>
            <Text className="font-poppinsBold text-white text-[25px] mb-4">Menu</Text>
            <View>
              <Text className="font-poppins text-white text-[15px] mb-[11px]">Home</Text>
              <Text className="font-poppins text-white text-[15px] mb-[11px]">About</Text>
              <Text className="font-poppins text-white text-[15px] mb-[11px]">Success stories</Text>
              <Text className="font-poppins text-white text-[15px] mb-[11px]">Courses</Text>
              <Text className="font-poppins text-white text-[15px] mb-[11px]">Contact</Text>
            </View>
          </View>

          <View className="items-start">
            <View className="mb-6 items-start">
              <Text className="font-poppinsBold text-white text-[25px] mb-[18px]">
                Get in touch
              </Text>
              <View className="items-start">
                <Text className="font-poppins text-white text-right text-[15px]  mb-[17px]">
                  support@untitledui.com
                </Text>
                <Text className="font-poppins text-white text-right text-[15px]">
                  +(374)94-019-941
                </Text>
              </View>
            </View>

            <View>
              <Text className="font-poppinsBold text-white text-[25px] mb-4">Follow us</Text>
              <View className="flex-row space-x-4">
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/images/facebook.png")}
                    className="w-[18px] h-[18px] mr-[11px]"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/images/instagram.png")}
                    className="w-[18px] h-[18px] mr-[11px]"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/images/linkedin.png")}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full py-[10px]"
      >
        <Text className="font-poppins text-white text-center">
          © {new Date().getFullYear()} PADC LLC All Rights Reserved
        </Text>
      </LinearGradient>
    </>
  );
};

export default FooterSection;
