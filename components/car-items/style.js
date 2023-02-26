import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width:"100%",
        height:"100%"
      },
      titles:{
        marginTop:"35%",
        width:"100%",
        alignItems:"center"
      },
      title:{
        fontSize:40,
        fontWeight:"600"
      },
      subtitle:{
        color:"#5c5e62"
      },
      backgroundImage:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        position:"absolute"
      },
      buttonsContainer:{
        position:"absolute",
        bottom:50,
        width:"100%",
      },
      taglineCTA:{
        textDecorationLine:"underline",
        paddingLeft:5
      }
})

export default styles;