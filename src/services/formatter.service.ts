export class FormatterService{
    customValueFormatterForDate = (value: any) => {
        if(value === undefined || value === null){
            return "N/C"
        }
        if (typeof value === 'string') {
            const isDate = this.isDateString(value);
            if (isDate) {
                const createdAtDate = new Date(value);
                return createdAtDate.toLocaleDateString();
            }
        }
        return value;
    }
    isDateString = (value: any) => {
        const date = new Date(value);
        return date.toString() !== "Invalid Date" && !isNaN(date.getTime());
    }
}