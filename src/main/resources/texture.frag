#version 400
in vec4 vertexColor;
in vec2 textureCoord;

out vec4 fragColor;

uniform sampler2D texImage;

void main () {
    vec4 textureColor = texture(texImage, textureCoord);
    fragColor = vec4(vertexColor) * textureColor;
}