# Scorpion Core
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Framework (core) for web automation testing using selenium-js, cucumber and typescript.

## Supported steps

### Asserts
```cucumber
I assert that the "locator" element contains the "attribute" attribute
I assert that the "locator" element does not contain the "attribute" attribute
I assert that the "locator" element has the "attribute" attribute
I assert that the "locator" element does not have the "attribute" attribute
I assert that the "locator" element has the "cssProperty" property
I assert that the "locator" element does not have the "cssProperty" property
I assert that the page document contains the text "text"
I assert that the page document does not contain the text "text"
I assert that the "locator" element contains the text "text"
I assert that the "locator" element does not contain the text "text"
I assert see "locator" checked
I assert see "locator" unchecked
I assert to be in "text"
```

### Element Interaction
```cucumber
I click on "locator"
I click on the text "text"
I click on the tag "label"
I fill the "locator" field with "text"
I clean the field "locator"
```

### Finding Elements
```cucumber
I wait for the "locator" element to be visible
I wait for the "locator" element to be enabled
I wait for element "locator" to become stale
```

### Frames
```cucumber
I should see the frame "locator"
I should leave frame
```

### Navigation
```cucumber
I am on "url"
I navigate forward
I navigate back
I refresh page
I clear cookies
I add a cookie "name" with value "value"
```

### Screenshot
```cucumber
I take a screenshot
```

### User Prompts
```cucumber
I accept dialog box
I dismiss dialog box
I fill in the text "text" in the dialog box
```

### Wait
```cucumber
I wait for 10 seconds
I wait for 100 milliseconds
I set timeout as 10 seconds
I set timeout as 1 minutes
```

### Window Related
```cucumber
I maximize the browser window
I open the link "url" in new tab
I open the link "url" in new window
I switch tabs in 0 position of the browser
I close tab
I close window
```