import { render, fireEvent } from 'utils/tests/helpers';

import VisuallyHidden from '.';

describe('<VisuallyHidden />', () => {
  it('should not be able to show children when Alt key is not pressed', () => {
    const { container } = render(<VisuallyHidden>Test</VisuallyHidden>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        overflow: hidden;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
      }

      <div>
        <div
          class="c0"
        >
          Test
        </div>
      </div>
    `);
  });
  it('should be able to show children when Alt key is pressed', async () => {
    const { container } = render(<VisuallyHidden>Test</VisuallyHidden>);

    fireEvent.keyDown(document, {
      key: 'Alt',
    });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <span>
          Test
        </span>
      </div>
    `);
  });

  it('should be able to hide children when Alt key is released', async () => {
    const { container } = render(<VisuallyHidden>Test</VisuallyHidden>);

    fireEvent.keyDown(document, {
      key: 'Alt',
    });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <span>
          Test
        </span>
      </div>
    `);

    fireEvent.keyUp(document, {
      key: 'Alt',
    });
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        overflow: hidden;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
      }

      <div>
        <div
          class="c0"
        >
          Test
        </div>
      </div>
    `);
  });
});
