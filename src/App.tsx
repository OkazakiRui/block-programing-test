import { useEffect, VFC } from 'react';
import Blockly from 'blockly';

const App: VFC = () => {
  const xml = `
      <xml id="toolbox">
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
              <block type="controls_repeat_ext">
                  <value name="TIMES">
                      <block type="math_number">
                          <field name="NUM">10</field>
                      </block>
                  </value>
              </block>
              <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
              <block type="math_number">
                  <field name="NUM">123</field>
              </block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
              <block type="text"></block>
              <block type="text_print"></block>
          </category>
      </xml>
  `;
  const xmlParser = new DOMParser();
  const xmlDom = xmlParser.parseFromString(xml, 'text/xml');

  useEffect(() => {
    Blockly.inject('blocklyDiv', {
      toolbox: xmlDom.getElementById('toolbox'),
    });
  });

  return (
    <div>
      <div id="blocklyDiv" style={{ width: '1024px', height: '600px' }}></div>
    </div>
  );
};

export default App;
