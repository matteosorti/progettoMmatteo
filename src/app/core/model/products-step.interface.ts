/**
 * interfaccia che rappresenta lo step di un Todo
 */
export interface ProductsStep {
    /**
     * Definisce l'id dello step
     */
    id: number;
    /**
     * il titolo dello step
     */
    title: string;
    /**
     * indica se lo step è stato eseguito
     */
    //done: boolean;
    description: string;
    

    color: string;

    image: string;


    textColor: string;
}