type UpdateItemProps = {
        currentQuantity: number;
        itemId: number;
        };

export default function UpdateItemQuantity({ currentQuantity, itemId} : UpdateItemProps) {


    return <div>
        Hello UpdateItemQuantity
    </div>
}

// make buttons + - and use reduce 