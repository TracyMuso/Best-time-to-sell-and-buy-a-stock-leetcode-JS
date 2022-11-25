/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //exception handling
    if(prices.length === 1){
        return 0;
    }
    
    let head = 0;
    let tail = 1;
    let maxVal = 0;
    // two pointer solution
    while(head<tail){
        let profit = prices[tail] - prices[head];
        maxVal = Math.max(maxVal,profit);
        //if tail value is smaller than head value, move head pointer to tail position and tail ++
        if(prices[head] >= prices[tail]){
            head = tail;
            tail += 1;
            //if tail position is bigger than last price index, finish the loop
            if(tail === prices.length)
                break;
        // if tail value is larger or equal to the head value of prices,move tail one step more
        }else{
            tail += 1;
            //if tail exceeds the end position move one step for the head pointer and set tail to head' next position
            if(tail === prices.length){
                head += 1;
                tail = head + 1;
                //same as above
                if(tail === prices.length)
                    break;
            }
        }
    }
    return maxVal;
};
