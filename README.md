# distance-to-line-segment

Calculate closest distance between a point and a line segment

# API
<a name="module_distance-to-line-segment"></a>
## distance-to-line-segment

* [distance-to-line-segment](#module_distance-to-line-segment)
    * [distanceToLineSegment(lx1, ly1, lx2, ly2, px, py)](#exp_module_distance-to-line-segment--distanceToLineSegment) ⏏
        * [.squaredWithPrecalc(lx1, ly1, ldx, ldy, lineLengthSquared, px, py)](#module_distance-to-line-segment--distanceToLineSegment.squaredWithPrecalc)
        * [.squared(lx1, ly1, lx2, ly2, px, py)](#module_distance-to-line-segment--distanceToLineSegment.squared)

<a name="exp_module_distance-to-line-segment--distanceToLineSegment"></a>
### distanceToLineSegment(lx1, ly1, lx2, ly2, px, py) ⏏
Calculate the distance between a finite line segment and a point. Using distanceToLineSegment.squared can often be more efficient.

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| lx1 | <code>number</code> | x-coordinate of line segment's first point |
| ly1 | <code>number</code> | y-coordinate of line segment's first point |
| lx2 | <code>number</code> | x-coordinate of the line segment's second point |
| ly2 | <code>number</code> | y-coordinate of the line segment's second point |
| px | <code>number</code> | x coordinate of point |
| py | <code>number</code> | y coordinate of point |

<a name="module_distance-to-line-segment--distanceToLineSegment.squaredWithPrecalc"></a>
#### distanceToLineSegment.squaredWithPrecalc(lx1, ly1, ldx, ldy, lineLengthSquared, px, py)
Calculate the square of the distance between a finite line segment and a point. This 
version takes somewhat less convenient parameters than distanceToLineSegment.squared,
but is more efficient if you are calling it multiple times for the same line segment,
since you pass in some easily pre-calculated values for the segment.

**Kind**: static method of <code>[distanceToLineSegment](#exp_module_distance-to-line-segment--distanceToLineSegment)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lx1 | <code>number</code> | x-coordinate of line segment's first point |
| ly1 | <code>number</code> | y-coordinate of line segment's first point |
| ldx | <code>number</code> | x-coordinate of the line segment's second point minus lx1 |
| ldy | <code>number</code> | y-coordinate of the line segment's second point minus ly1 |
| lineLengthSquared | <code>number</code> | must be ldx\*ldx + ldy\*ldy. Remember, this precalculation    is for efficiency when calling this multiple times for the same line segment. |
| px | <code>number</code> | x coordinate of point |
| py | <code>number</code> | y coordinate of point |

<a name="module_distance-to-line-segment--distanceToLineSegment.squared"></a>
#### distanceToLineSegment.squared(lx1, ly1, lx2, ly2, px, py)
Calculate the square of the distance between a finite line segment and a point.

**Kind**: static method of <code>[distanceToLineSegment](#exp_module_distance-to-line-segment--distanceToLineSegment)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lx1 | <code>number</code> | x-coordinate of line segment's first point |
| ly1 | <code>number</code> | y-coordinate of line segment's first point |
| lx2 | <code>number</code> | x-coordinate of the line segment's second point |
| ly2 | <code>number</code> | y-coordinate of the line segment's second point |
| px | <code>number</code> | x coordinate of point |
| py | <code>number</code> | y coordinate of point |

# License

MIT