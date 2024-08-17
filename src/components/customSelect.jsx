import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CustomSelect(props) {
    const {options} = props;
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={options[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item, index) => (
              <SelectItem key={item} value={item}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
