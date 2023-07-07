import { getCounterById,updateCounter } from "../DAO/counter.dao.js";

const getNextSeqValue = async ( sequenceName ) => {
    try {
        console.log("seq name:", sequenceName)
        const valueSeq = await getCounterById(sequenceName);
        // const sequence = await updateCounter(  )
        return valueSeq;
    } catch (error) {
        console.log("Error seq value:", error)
        return null;
    }
}

export default getNextSeqValue;