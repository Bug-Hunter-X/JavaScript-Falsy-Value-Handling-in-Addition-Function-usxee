# JavaScript Falsy Value Handling Bug

This repository demonstrates a potential bug in JavaScript related to how a function handles falsy values during an addition operation. The function `foo` is designed to add two numbers, and it handles the case where either input is null. However, it doesn't explicitly handle other falsy values, which may lead to unexpected results.

## Bug Description

The `foo` function adds two numbers. It correctly handles `null` values, returning 0 in those cases.  However, it does not explicitly handle other falsy values such as `0`, `false`, `""`, `undefined`, etc., which may cause unexpected results when performing addition.  A more robust approach is needed to guarantee correct behaviour for all input types. 

## Solution

The bug is solved by using a strict equality check (`===`) to ensure that only null values are treated as 0.  Other falsy values will be treated according to their numeric value (0 for false, empty strings etc.)