import React, { useRef } from 'react'
import { RNCamera as Camera } from 'react-native-camera';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import RNFetchBlob from 'react-native-fetch-blob'
import moment from 'moment';


function RNCamera() {

    const camera = useRef(null)

    const takePicture = async () => {
        if (camera) {
              const options = {quality: 0.2,base64: true, pauseAfterCapture:true };
            const data = await camera.current.takePictureAsync(options);
            // const data = await camera.current.recordAsync();
            console.log(data);

            RNFetchBlob.fs.writeFile(`${RNFetchBlob.fs.dirs.PictureDir}/folder/hhhh.jpg`, data.base64, 'base64')
            .then(()=>{  
                        console.log('fghfhgfhgg, then',d);

              })
            // CameraRoll.save(data.uri)
            // await RNFetchBlob.fs.mkdir(`${RNFetchBlob.fs.dirs.PictureDir}/folder`)
            // await RNFetchBlob.fs.mv(
            //     data.uri,
            //     `${RNFetchBlob.fs.dirs.PictureDir}/folder/kkkk.jpg`
            //     ).then((d) => { 
            //     })
            //     .catch((e) => { 

            //         console.log('fghfhgfhgg',e);
            //     })

            // RNFetchBlob.fs.writeStream(`${RNFetchBlob.fs.dirs.PictureDir}/folder/kkkk.jpg`, data.base64)
            //     .then((stream) => {
            //         stream.write(RNFetchBlob.base64.encode())
            //         return stream.close()
            //     })
        }
    };
    const takeVideo = () => {
        if (camera) {
            //   const options = { quality: 0.2, pauseAfterCapture:true };
            // const data = await camera.current.takePictureAsync();
            const data = camera.current.stopRecording()
            // console.log(data);
            // CameraRoll.save(data.uri)
        }
    };

    return (
        <>
            <Camera
                ref={camera
                }
                style={styles.preview}
                type={Camera.Constants.Type.front}
            // flashMode={Camera.Constants.FlashMode.on}
            // androidCameraPermissionOptions={{
            //     title: 'Permission to use camera',
            //     message: 'We need your permission to use your camera',
            //     buttonPositive: 'Ok',
            //     buttonNegative: 'Cancel',
            // }}
            // androidRecordAudioPermissionOptions={{
            //     title: 'Permission to use audio recording',
            //     message: 'We need your permission to use your audio',
            //     buttonPositive: 'Ok',
            //     buttonNegative: 'Cancel',
            // }}
            // onGoogleVisionBarcodesDetected={({ barcodes }) => {
            //     console.log(barcodes);
            // }}
            >
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takeVideo} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> Stop </Text>
                    </TouchableOpacity>
                </View>

            </Camera>

        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: '600',
        color: "red",
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

})

export default RNCamera
