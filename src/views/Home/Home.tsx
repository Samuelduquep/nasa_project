import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Header from "../../components/header/Header";
import api from '../../utils/api'
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";
import { formatDate, calculateFiveDaysAgo } from "../../utils/formatDate";
import FiveLastDaysImages from "../../components/FiveLastDaysImages";


const Home = () => {

    const [todayImage, setTodayImage] = useState<PostImage>({});
    const [lastImages, setLastImages] = useState<PostImage[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loaadTodaysImage = async () => {
            setLoading(true)
            try {
                const res = await api()
                setTodayImage(res)
            } catch (error) {
                setTodayImage({})
            }
            setLoading(false)
        }

        const loadLastFiveDaysImage = async () => {
            setLoading(true)
            try {
                const currentDate = formatDate(new Date());
                const fiveDaysAgoDate = formatDate(calculateFiveDaysAgo())

                const lastFiveDaysReq = await api(`&start_date=${fiveDaysAgoDate}&end_date=${currentDate}`)

                setLastImages(lastFiveDaysReq)

            } catch (error) {
                console.error(error)
                setLastImages([])
            }
            setLoading(false)
        }

        loaadTodaysImage().catch(null)
        loadLastFiveDaysImage().catch(null)
    }, [])


    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
                <>
                    <Header />
                    <TodaysImage {...todayImage} />
                    <FiveLastDaysImages postImages={lastImages} />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home