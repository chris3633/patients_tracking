import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


export default function OppositeContentTimeline(props) {
    console.log(props.storici_pazienti)

    return (
        <div style={{ marginTop: 80 }}>
        <React.Fragment>
            <Timeline >
                {props.storici_pazienti && Object.keys(props.storici_pazienti).map((oggetto, index) => (
                        oggetto && Object.keys(props.storici_pazienti[oggetto]).map((paziente, id) => (
                            oggetto == props.id_paziente ?
                            <TimelineItem key={id}>
                            <TimelineOppositeContent color="text.secondary">
                            {props.storici_pazienti[oggetto][paziente]['ora_ingresso'].$date.split("T")[0]

                            +"   -   "+
                            props.storici_pazienti[oggetto][paziente]['ora_ingresso'].$date.split("T")[1].split(".")[0]                            }
                            {/* {console.log(props.storici_pazienti[oggetto][id]['ora_ingresso'].$date)} */}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            {props.storici_pazienti[oggetto][paziente]['room']}
                            </TimelineContent>
                        </TimelineItem>

                        : null


                        ))

                ))
                }
            </Timeline>
        </React.Fragment>
        </div>
    );
}
