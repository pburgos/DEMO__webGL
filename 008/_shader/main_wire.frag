precision highp float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

varying vec4  vColor;
varying float fogFactor;
// varying vec3 vPosition;

void main(){

  vec2 uv = gl_FragCoord.xy / resolution.xy;

	// ===== FOG
	// gl_FragColor = mix(vec4(1.0, 1.0, 1.0, 1.0), vColor, fogFactor);

	// ===== DEFAULT
	gl_FragColor = vec4(0.8, 0.8, 0.8, 1.0);
}
