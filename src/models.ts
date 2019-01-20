import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class ContactModel {
    @ApiModelPropertyOptional()
    id: number;
    @ApiModelProperty()
    name: string;
}
