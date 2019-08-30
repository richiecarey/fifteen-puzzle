export default function legalMove(clickX, clickY, blank) {
  if (Math.abs(clickX + clickY - (blank[0] + blank[1])) === 1) {
    return true;
  } else {
    return false;
  }
}
