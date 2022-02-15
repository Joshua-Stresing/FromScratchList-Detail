// IMPORT MODULES under test here:
import { renderListItem, renderListItemMain } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="console" style="top: 200px; left: 50%;"><a href="./gameconsoles/?id=1"><img src="./assets/Atari.jpg"><span class="name">Atari</span></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderListItemMain({
        id: '1',
        name: 'Atari',
        year: '1977',
        desc: 'Classically viewed as the original game console.',
        top: '200px',
        left: '50%',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="console"><a href="./gameconsoles/?id=undefined"><img src="./assets/undefined.jpg"><span class="name year"></span><span></span></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderListItem({
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
