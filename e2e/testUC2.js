import {Selector} from 'testcafe';
fixture `UC2 E2E tests` .page `http://localhost:8080/index.html`
.clientScripts({

    // content injected into every page stubs out getCurrentPosition()

    content: `navigator.geolocation.getCurrentPosition = function(fn) {

      fn({ coords: { latitude: 51.454514, longitude: -2.587910 }, timestamp: Date.now() })

    };`

  });
test('first test',async function(t){
    await t.click('#table') 
    .expect(Selector('table > tbody').childElementCount).eql(27);

});