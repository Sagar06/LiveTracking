// import { log } from "console";
import { kafkaClient } from "./kafka-client.js";

async function setup(){
    const admin = kafkaClient.admin();

    console.log(`Kafka Admin Connecting`);
    await admin.connect();
    console.log(`Kafka Admin Connected`);

    try {
        await admin.createTopics({
            topics: [
                {
                    topic: "location-updates",
                    numPartitions: 2,
                }
            ]
        })
        console.log(`Topic 'location-updates' created successfully`);
    } catch (error) {
        if (error.message.includes('already exists')) {
            console.log(`Topic 'location-updates' already exists`);
        } else {
            console.error(`Error creating topic:`, error.message);
            throw error;
        }
    }
    
    await admin.disconnect();
    console.log(`Kafka Admin Disconnected`);
    
};
setup();

