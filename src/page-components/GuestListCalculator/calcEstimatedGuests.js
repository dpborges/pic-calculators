
// ************************************************************
// Function used for Guest List Calc
// ************************************************************

const calcEstimatedGuests = (numLocalGuests, numOutOfTownGuests, numOutOfStateGuests) => {

    // Initialize output properties
    let totalInvites    = 0;
    let likelyToAttend  = 0;
    let possibleNoShows = 0;

    // Total up the guests
    totalInvites = parseInt(numLocalGuests) + parseInt(numOutOfTownGuests) + parseInt(numOutOfStateGuests);
    
    // Calculate number of guests likely to attend
    let lgLikelyToAttend   = parseInt(numLocalGuests) * .80;
    let ootgLikelyToAttend = parseInt(numOutOfTownGuests) * .60;
    let oosgLikelyToAttend = parseInt(numOutOfStateGuests) * .50;

    likelyToAttend = Math.round(lgLikelyToAttend + ootgLikelyToAttend + oosgLikelyToAttend);

    possibleNoShows = Math.round(totalInvites - likelyToAttend);

    return ({ totalInvites, likelyToAttend, possibleNoShows})
}

export default calcEstimatedGuests;