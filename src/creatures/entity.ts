import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Creature extends BaseEntity {
    @PrimaryGeneratedColumn()
        id?: number
    
        
    @Column('text', {nullable:false})
        creature_name!: string
    
    @Column('text', {nullable:false})
        species!:string
        
    @Column('bool', {nullable:false})
        dangerous!: boolean
            
}
