import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export type GenericProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
export type OptionProps = DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>