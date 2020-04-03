import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CrossIcon: React.FC<SvgProps> = props => {
  return (
    <Svg width={30} height={30} viewBox="0 0 512 512" {...props}>
      <Path
        d="m330.443,256l136.765,-136.765c14.058,-14.058 14.058,-36.85 0,-50.908l-23.535,-23.535c-14.058,-14.058 -36.85,-14.058 -50.908,0l-136.765,136.765l-136.765,-136.765c-14.058,-14.058 -36.85,-14.058 -50.908,0l-23.535,23.535c-14.058,14.058 -14.058,36.85 0,50.908l136.765,136.765l-136.765,136.765c-14.058,14.058 -14.058,36.85 0,50.908l23.535,23.535c14.058,14.058 36.85,14.058 50.908,0l136.765,-136.765l136.765,136.765c14.058,14.058 36.85,14.058 50.908,0l23.535,-23.535c14.058,-14.058 14.058,-36.85 0,-50.908l-136.765,-136.765z"
      />
    </Svg>
  );
};
