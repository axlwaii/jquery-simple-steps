# jQuery Simple Steps

Sometimes you might want to display informations step by step.

Usage
-----
Basic html:
```html
<div id="your-steps-container">
  // each step needs to have a step class
  <div class="step">
    <h1> This is the first Step </h1>

    // next step gets triggered by click on next-step-button class
    <button class="right button small next-step-button">Next</button>
  </div>
  <div class="step">
    <h1> This is the second Step </h1>

    // previous step gets triggered by click on prev-step-button class
    <button class="left button small prev-step-button">Previous</button>
    <button class="right button small next-step-button">Next</button>
  </div>
  <div class="step">
    <h1> This is the last Step </h1>
    <button class="left button small prev-step-button">Previous</button>
  </div>
</div>
```

Initialize with:
```javascript
$('#your-steps-container').simpleSteps();
```

License - The MIT License (MIT)
-------------------------------

  Copyright (c) 2013 Markus Waitl

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
