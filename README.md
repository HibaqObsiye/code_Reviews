<!-- company that makes digital audio plugins. Musicians apply filter to track to change how the track sounds. Build a band pass filter

Input: Array of integers, each integer is a frequency. If value is lower than the lower limit it should be brought down to the lower limit value. Vice versa for a value higher than the higher value. If within range, leave it as it is.

lower limit = 40
upper limit = 1000

Input               Output
[60,10,45,60,1500]  [60,40,45,60,1000]

if user defines value 
[60,10,45,60,1500],20,50   [50,20,45,50,50]

 [40,60,40,60],40, 60    [40,60,40,60]

 [40,40, 70] 40, 60      [40,40,60]
  -->