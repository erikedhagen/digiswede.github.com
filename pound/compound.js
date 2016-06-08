/*
    P : Principal (initial) amount
    r : annual rate of interest
    t : number of years to calculate
    n : number of times the interest is compounded per year
*/
window.compound = function(initial, monthly, interest, years, period){
  period = period || 1;
  return initial * Math.pow(1+ interest/period, period*years) + monthly*12/period*(Math.pow(1+interest/period, period*years)-1)*period/interest;
}
