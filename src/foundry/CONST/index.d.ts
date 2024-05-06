import './CHAT_MESSAGE_TYPES';
import './DOCUMENT_OWNERSHIP_LEVELS';
import './DRAWING_TYPES';
import './GRID_TYPES';
import './KEYBINDING_PRECEDENCE';
import './MACRO_TYPES';
import './TOKEN_DISPOSITIONS';
import './USER_ROLES';

declare global {
  namespace foundry {
    namespace CONST {
      const vtt: string;
      const VTT: string;
      const WEBSITE_URL: string;
      const WEBSITE_API_URL: string;
      const ASCII: string;

      const DEFAULT_TOKEN: string;
      const GRID_MIN_SIZE: number;
      const SORT_INTEGER_DENSITY: number;
    }
  }
}
