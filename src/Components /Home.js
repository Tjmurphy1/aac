import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="contain">
                <h4 className="title">An Overview of Advanced Audio Codec (AAC)</h4>
                <div className="transform">
                    <p>
                        I used a random word picker and it chose AAC - Advanced Audio Coding. Advanced Audio Coding is a type of music formatter. The files that are in .aac usually contain compressed audio files. There are a few common things this format is used that you probably know and don’t know about. AAC is the default or standard audio format for iPhone, iPod, iPad, Nintendo DSi, Nintendo 3DS, iTunes, DivX Plus Web Player, PlayStation 3.
                    </p>
                    <p>
                        AAC contains audio using lossy compression. There are tons of other sounds so close together, low or high pitches that most people don’t hear. What lossy compression does is cut out those songs close together that we don’t really hear and it makes the file smaller. AAC also makes the bit rate a lot lower but also has higher quality. Most songs that are formatted as AAC have a smaller file format from 7mb up to 12mb depending on how long the song is.
                    </p>

                </div>

            </div>
        );
    }
}

export default Home;
