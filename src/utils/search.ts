import { Member, Project } from "./config_type_alias";

export function SearchFor(
    array: Member[] | Project[],
    query: string,
    search_in: (v: {[key: string]: string}) => string = (v) => v.gh)
{
    if (!query)
        return array;
    let r = [];
    array.forEach((v) => {
        if (search_in(v).toLowerCase().includes(query.toLowerCase()))
            r.push(v);
    });
    return r;
}

function GetCorrectWord(n: number, search_for: 'members' | 'projects'): string {
    let strings = {
        members: {
            one: 'участник',
            from_two_to_four: 'участника',
            other: 'участников'
        },
        projects: {
            one: 'проект',
            from_two_to_four: 'проекта',
            other: 'проектов'
        }
    };

    if (n % 10 == 1 && Math.floor(n % 100 / 10) != 1)
        return strings[search_for].one;
    else if ([2, 3, 4].includes(n % 10) && Math.floor(n % 100 / 10) != 1)
        return strings[search_for].from_two_to_four;
    return strings[search_for].other;
}

export function GetSearchText(n: number, query: string, search_for: 'members' | 'projects'): string {
    let strings = {
        members: {
            zero: 'участника',
            name: 'нике'
        },
        projects: {
            zero: 'проекта',
            name: 'названии'
        },
        one_ones: {
            showed: 'Показан',
            have: 'содержащий'
        },
        bigger_that_one: {
            showed: 'Показаны',
            have: 'содержащих'
        }
    };

    if (n == 0)
        return `Не найдено ни одного ${strings[search_for].zero}, содержащего в ${strings[search_for].name} ${query}`;

    let o;
    if (n % 10 == 1 && Math.floor(n % 100 / 10) != 1) o = strings.one_ones;
    else o = strings.bigger_that_one;

    let s =  `${o.showed} ${n} ${GetCorrectWord(n, search_for)}`;
    if (!query) return s;
    return s + ` (${o.have} в ${strings[search_for].name} ${query})`;
}