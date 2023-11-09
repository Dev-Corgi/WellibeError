// import * as React from "react";
// import { Text, StyleSheet, Image, View } from "react-native";
// import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

// const Frame = () => {
//   return (
//     <View style={styles.view}>
//       <Text style={[styles.text, styles.textTypo2]}>{`어떤 목적으로
// 웰리비를 찾아주셨나요?`}</Text>
//       <View style={styles.maskGroupParent}>
//         <Image
//           style={styles.maskGroupIcon}
//           resizeMode="cover"
//           source={require("../assets/mask-group.png")}
//         />
//         <Text style={[styles.text1, styles.textTypo1]}>
//           적절한 트레이닝 추천에 필요해요!
//         </Text>
//       </View>
//       <Image
//         style={styles.icon}
//         resizeMode="cover"
//         source={require("../assets/.png")}
//       />
//       <Image
//         style={styles.child}
//         resizeMode="cover"
//         source={require("../assets/group-678.png")}
//       />
//       <View style={styles.wrapper}>
//         <Text style={[styles.text2, styles.textTypo2]}>목적 선택</Text>
//       </View>
//       <View style={[styles.inner, styles.innerLayout]}>
//         <View style={[styles.container, styles.innerLayout]}>
//           <Text style={[styles.text3, styles.textClr]}>다음</Text>
//         </View>
//       </View>
//       <View style={styles.frameParent}>
//         <View>
//           <View style={styles.frame}>
//             <Text style={[styles.text4, styles.textTypo]}>
//               풍부한 표정을 만들고 싶어요
//             </Text>
//           </View>
//           <View style={[styles.frameView, styles.wrapperLayout]}>
//             <Text style={[styles.text5, styles.textTypo]}>
//               얼굴 비대칭이 고민이에요
//             </Text>
//           </View>
//         </View>
//         <View style={styles.frameContainer}>
//           <View style={styles.wrapperLayout}>
//             <Text style={[styles.text6, styles.textTypo]}>
//               작고 갸름한 얼굴을 만들고 싶어요
//             </Text>
//           </View>
//           <View style={[styles.frameView, styles.wrapperLayout]}>
//             <Text style={[styles.text6, styles.textTypo]}>
//               주름을 예방/개선하고 싶어요
//             </Text>
//           </View>
//         </View>
//         <View style={[styles.wrapper3, styles.wrapperLayout]}>
//           <Text style={[styles.text6, styles.textTypo]}>
//             피부 처짐을 예방/개선하고 싶어요
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textTypo2: {
//     textAlign: "left",
//     color: Color.navy,
//     fontFamily: FontFamily.font,
//     lineHeight: 34,
//   },
//   textTypo1: {
//     lineHeight: 26,
//     textAlign: "left",
//     fontFamily: FontFamily.font,
//   },
//   innerLayout: {
//     width: 333,
//     position: "absolute",
//   },
//   textClr: {
//     color: Color.white,
//     fontWeight: "700",
//   },
//   textTypo: {
//     fontSize: FontSize.font6_size,
//     lineHeight: 26,
//     textAlign: "left",
//     fontFamily: FontFamily.font,
//   },
//   wrapperLayout: {
//     backgroundColor: Color.colorGray_100,
//     width: 327,
//     padding: Padding.p_3xs,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     height: 52,
//     borderRadius: Border.br_xs,
//   },
//   text: {
//     top: "12.19%",
//     left: "6.4%",
//     fontSize: FontSize.size_3xl,
//     fontWeight: "700",
//     textAlign: "left",
//     color: Color.navy,
//     fontFamily: FontFamily.font,
//     lineHeight: 34,
//     position: "absolute",
//   },
//   maskGroupIcon: {
//     width: 37,
//     height: 37,
//   },
//   text1: {
//     fontSize: FontSize.font4_size,
//     fontWeight: "300",
//     marginLeft: 14,
//     color: Color.grey,
//   },
//   maskGroupParent: {
//     top: 172,
//     left: 21,
//     backgroundColor: Color.colorWhitesmoke_100,
//     width: 332,
//     paddingLeft: Padding.p_sm,
//     paddingTop: Padding.p_3xs,
//     paddingRight: Padding.p_3xs,
//     paddingBottom: Padding.p_3xs,
//     alignItems: "center",
//     flexDirection: "row",
//     height: 52,
//     borderRadius: Border.br_xs,
//     position: "absolute",
//   },
//   icon: {
//     top: 12,
//     left: 10,
//     width: 38,
//     height: 44,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   child: {
//     top: 66,
//     width: 329,
//     height: 3,
//     left: 24,
//     position: "absolute",
//   },
//   text2: {
//     fontSize: FontSize.font5_size,
//     letterSpacing: -0.6,
//     fontWeight: "600",
//     textAlign: "left",
//     color: Color.navy,
//     fontFamily: FontFamily.font,
//     lineHeight: 34,
//   },
//   wrapper: {
//     top: 18,
//     left: 144,
//     height: 38,
//     padding: Padding.p_3xs,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     position: "absolute",
//   },
//   text3: {
//     fontSize: FontSize.font_size,
//     lineHeight: 26,
//     textAlign: "left",
//     fontFamily: FontFamily.font,
//   },
//   container: {
//     top: 0,
//     left: 0,
//     borderRadius: Border.br_base,
//     backgroundColor: Color.navy,
//     paddingHorizontal: Padding.p_44xl,
//     paddingVertical: Padding.p_4xl,
//     justifyContent: "center",
//     width: 333,
//     alignItems: "center",
//     flexDirection: "row",
//     overflow: "hidden",
//   },
//   inner: {
//     top: 719,
//     height: 57,
//     left: 24,
//   },
//   text4: {
//     color: Color.white,
//     fontWeight: "700",
//   },
//   frame: {
//     backgroundColor: Color.colorKhaki,
//     width: 327,
//     padding: Padding.p_3xs,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     height: 52,
//     borderRadius: Border.br_xs,
//   },
//   text5: {
//     width: 142,
//     color: Color.grey,
//   },
//   frameView: {
//     marginTop: 10,
//   },
//   text6: {
//     color: Color.grey,
//   },
//   frameContainer: {
//     marginTop: 11,
//   },
//   wrapper3: {
//     marginTop: 11,
//   },
//   frameParent: {
//     top: 256,
//     left: 22,
//     position: "absolute",
//   },
//   view: {
//     backgroundColor: Color.white,
//     flex: 1,
//     width: "100%",
//     height: 812,
//     overflow: "hidden",
//   },
// });

// export default Frame;
