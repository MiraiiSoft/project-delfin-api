import { getCounterById,updateCounter } from "../DAO/counter.dao.js";

const getNextSeqValue = async ( sequenceName ) => {
    try {
        
        const valueSeq = await getCounterById(sequenceName);
        const newSeq = valueSeq.seq_value + 1;
        const sequence = await updateCounter( sequenceName, newSeq );
        return sequence.seq_value;
    } catch (error) {
        console.log("Error seq value:", error)
        return null;
    }
}

export default getNextSeqValue;