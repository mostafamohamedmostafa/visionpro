import React from 'react'
import { HeroSection } from './HeroSection'
import { VideoSection } from './VideoSection'
import Welcomespatialcomputing from "../Images/Welcomespatialcomputing.mp4"
import physicalspace from "../Images/physicalspace.mp4"
import navigatesimply from "../Images/navigatesimply.mp4"
import beforepossible from "../Images/beforepossible.mp4"
import { NeverSeenSection } from './NeverSeenSection'

import { AppsSection } from './AppsSection'
import { AAA, AppData, ConnectionData, EntertainmentData, VideoData } from './Data'
import AppsVideo from "../Images/Apps.mp4"
import appsection1 from "../Images/appsection1.jpg"

import EntertainmentVideo from "../Images/Entertainment.mp4"
import Entertainment1 from "../Images/Entertainment1.jpg"


import VideoVideo from "../Images/Video.mp4"
import Video1 from "../Images/Video1.jpg"

import ConnectionVideo from "../Images/Connection.mp4"
import Connection1 from "../Images/Connection1.jpg"
import { DesginSection, DesginSectionTwo } from './DesginSection'
import { VisionOsSection } from './VisionOsSection'


export const OverVeiwPage = () => {
    return (
        <section className='OverViewPage'>
            <HeroSection></HeroSection>
            <VideoSection
                VideoSectionText="Welcome to the era of spatial computing."
                VideoSectionVideo={Welcomespatialcomputing}></VideoSection>

            <VideoSection
                VideoSectionText="Apple Vision Pro seamlessly blends digital content with your physical space."
                VideoSectionVideo={physicalspace}></VideoSection>


            <VideoSection
                VideoSectionText="You navigate simply by using your eyes, hands, and voice.                "
                VideoSectionVideo={navigatesimply}></VideoSection>


            <VideoSection
                VideoSectionText="So you can do the things you love in ways never before possible."
                VideoSectionVideo={beforepossible}></VideoSection>


            <NeverSeenSection></NeverSeenSection>
            <AppsSection

                AppsSectionTextSmall="Apps"
                AppsSectionText="Free your desktop.
                And your apps will follow."
                AppsSectionVideo={AppsVideo}
                LeftCardText="Your apps live in your space."
                RightCardText="With Apple Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in Safari, create a to‑do list in Notes, chat in Messages, and seamlessly move between them with a glance. You can even bring your Mac workflows into Apple Vision Pro wirelessly with Mac Virtual Display."
                AppsSectionButton="Learn more about apps"
                ButtonCollapseId="#App"
                ButtonCollapse="App"
                Image={appsection1}
                Text="Apple Vision Pro has the familiar apps you know and love — transformed to live in your space. Like Safari, Photos, Music, and Messages. And with iCloud, your content is automatically synced with your iPhone, iPad, and Mac."
                Data={AppData}
                BgStyle="bgbg"
                carouselID="Appps"
                carouselIDHash="#Appps"

            >

            </AppsSection>

            <AppsSection

                AppsSectionTextSmall="Entertainment"
                AppsSectionText="The ultimate theater.
                Wherever you are."
                AppsSectionVideo={EntertainmentVideo}
                LeftCardText="A new dimension for entertainment."
                RightCardText="Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home."
                AppsSectionButton="Learn more about entertainment"
                ButtonCollapseId="#Entertainment"
                ButtonCollapse="Entertainment"
                Image={Entertainment1}
                Text="All‑new Apple Immersive Video is a 180-degree 3D 8K recording format captured with Spatial Audio — putting you right inside the action and transporting you to places you’ve never been."
                Data={EntertainmentData}
                carouselID="Entertainmentt"
                carouselIDHash="#Entertainmentt"

            >

            </AppsSection>


            <AppsSection

                AppsSectionTextSmall="Photos and Videos"
                AppsSectionText="Be in the moment.
                All over again."
                AppsSectionVideo={VideoVideo}
                LeftCardText="Your memories come alive."
                RightCardText="Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale. And panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 15 Pro, then view them on Apple Vision Pro."
                AppsSectionButton="Learn more about photos and videos"
                ButtonCollapseId="#Photos"
                ButtonCollapse="Photos"
                Image={Video1}
                Text="Spatial videos and photos have incredible depth that lets you see into a moment. Expand them to get even closer to your favorite memories."
                Data={VideoData}
                BgStyle="bgbg"
                carouselID="Photoss"
                carouselIDHash="#Photoss"

            >

            </AppsSection>



            <AppsSection

                AppsSectionTextSmall="Connection"
                AppsSectionText="Get on the same page.
                In the same space."
                AppsSectionVideo={ConnectionVideo}
                LeftCardText="Make meetings more meaningful."
                RightCardText="Apple Vision Pro makes it easy to collaborate and connect wherever you are. FaceTime video tiles are life‑size, and as new people join, the call simply expands in your room. Or choose to use your spatial Persona and feel like you are sharing the same space with others. And in FaceTime, you can use apps to collaborate with colleagues on documents simultaneously."
                AppsSectionButton="Learn more about connection"
                ButtonCollapseId="#Connection"
                ButtonCollapse="Connection"
                Image={Connection1}
                Text="In FaceTime, each participant appears in your space within a tile that you can adjust in scale. Spatial Audio makes the conversation feel more natural by placing each person’s voice in the location of their tile."
                Data={ConnectionData}
                carouselID="Connections"
                carouselIDHash="#Connections"


            >

            </AppsSection>

            <DesginSection></DesginSection>
            <DesginSectionTwo></DesginSectionTwo>
            <VisionOsSection></VisionOsSection>
        </section>

    )
}
