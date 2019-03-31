let elevator = (left, right, call) =>
    Math.abs(call - right) <= Math.abs(call - left) ? "right" : "left";

elevator(0, 1, 0); // left
