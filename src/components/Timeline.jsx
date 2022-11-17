import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Tilte";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map(timelineitem => (
                    <TimelineItem
                        year={timelineitem.year}
                        title={timelineitem.title}
                        duration={timelineitem.duration}
                        details={timelineitem.details}
                    />
                 ))}
            </div>
        </div>
    )
}

export default Timeline;