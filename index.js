'use strict';

/**
 * @module distance-to-line-segment 
 */


/**
* Calculate the square of the distance between a finite line segment and a point. This 
* version takes somewhat less convenient parameters than distanceToLineSegment.squared,
* but is more efficient if you are calling it multiple times for the same line segment,
* since you pass in some easily pre-calculated values for the segment.
* @alias module:distance-to-line-segment.squaredWithPrecalc
* @param {number} lx1 - x-coordinate of line segment's first point
* @param {number} ly1 - y-coordinate of line segment's first point
* @param {number} ldx - x-coordinate of the line segment's second point minus lx1
* @param {number} ldy - y-coordinate of the line segment's second point minus ly1
* @param {number} lineLengthSquared - must be ldx\*ldx + ldy\*ldy. Remember, this precalculation
*    is for efficiency when calling this multiple times for the same line segment.
* @param {number} px - x coordinate of point
* @param {number} py - y coordinate of point
*/

function distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py) {
   var t; // t===0 at line pt 1 and t ===1 at line pt 2
   if (!lineLengthSquared) {
      // 0-length line segment. Any t will return same result
      t = 0;
   }
   else {
      t = ((px - lx1) * ldx + (py - ly1) * ldy) / lineLengthSquared;

      if (t < 0)
         t = 0;
      else if (t > 1)
         t = 1;
   }
   
   var lx = lx1 + t * ldx,
       ly = ly1 + t * ldy,
       dx = px - lx,
       dy = py - ly;
   return dx*dx + dy*dy;   
}

/**
* Calculate the square of the distance between a finite line segment and a point. 
* @alias module:distance-to-line-segment.squared
* @param {number} lx1 - x-coordinate of line segment's first point
* @param {number} ly1 - y-coordinate of line segment's first point
* @param {number} lx2 - x-coordinate of the line segment's second point
* @param {number} ly2 - y-coordinate of the line segment's second point
* @param {number} px - x coordinate of point
* @param {number} py - y coordinate of point
*/

function distanceSquaredToLineSegment(lx1, ly1, lx2, ly2, px, py) {
   var ldx = lx2 - lx1,
       ldy = ly2 - ly1,
       lineLengthSquared = ldx*ldx + ldy*ldy;
   return distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py);
}

/**
* Calculate the distance between a finite line segment and a point. Using distanceToLineSegment.squared can often be more efficient.
* @alias module:distance-to-line-segment
* @param {number} lx1 - x-coordinate of line segment's first point
* @param {number} ly1 - y-coordinate of line segment's first point
* @param {number} lx2 - x-coordinate of the line segment's second point
* @param {number} ly2 - y-coordinate of the line segment's second point
* @param {number} px - x coordinate of point
* @param {number} py - y coordinate of point
*/

function distanceToLineSegment(lx1, ly1, lx2, ly2, px, py)
{
   return Math.sqrt(distanceSquaredToLineSegment(lx1, ly1, lx2, ly2, px, py));
}


distanceToLineSegment.squared = distanceSquaredToLineSegment;
distanceToLineSegment.squaredWithPrecalc = distanceSquaredToLineSegment2;
module.exports = distanceToLineSegment;
